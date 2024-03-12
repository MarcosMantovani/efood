import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { Button } from '../ProductCard/styles'

import dump from '../../assets/images/lixeira.png'

import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { formatPrice } from '../ProductCard'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [inDelivery, setInDelivery] = useState(false)
  const [inCheckout, setInCheckout] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      addressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(10, 'O campo precisa ter 10 caracteres')
        .max(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string().required('O campo é obrigatório'),
      addressComplement: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
      cardName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setInCheckout(false)
      setInDelivery(false)
      setIsCompleted(true)
    }
  }, [isSuccess, dispatch])

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const continueToCheckout = () => {
    setInDelivery(false)
    setInCheckout(true)
  }

  const goBackToDelivery = () => {
    setInDelivery(true)
    setInCheckout(false)
  }

  const completePurchase = () => {
    form.handleSubmit()
    if (isSuccess) {
      setInCheckout(false)
      setIsCompleted(true)
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {!inDelivery && !inCheckout && !isCompleted && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.cartId}>
                      <img src={item.foto} />
                      <div>
                        <h3>{item.nome}</h3>
                        <div>
                          <span>{formatPrice(item.preco)}</span>
                        </div>
                      </div>
                      <button type="button">
                        <img
                          src={dump}
                          onClick={() => removeItem(item.cartId!)}
                        />
                      </button>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <p>Valor total</p>
                  <p>{formatPrice(getTotalPrice())}</p>
                </S.Prices>
                <Button onClick={() => setInDelivery(true)} type="button">
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <span className="noCartItems">
                Nenhum prato adicionado ao carrinho
              </span>
            )}
          </>
        )}
        {(inDelivery || inCheckout || isCompleted) && (
          <>
            <form onSubmit={form.handleSubmit}>
              {inDelivery && !inCheckout && !isCompleted && (
                <>
                  <S.Title>Entrega</S.Title>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxwidth="155px">
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        name="cep"
                        type="text"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="155px">
                      <label htmlFor="addressNumber">Número</label>
                      <input
                        id="addressNumber"
                        name="addressNumber"
                        type="text"
                        value={form.values.addressNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('addressNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="addressComplement">Complemento</label>
                      <input
                        id="addressComplement"
                        name="addressComplement"
                        type="text"
                        value={form.values.addressComplement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('addressComplement') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <Button
                    margintop="16px"
                    onClick={continueToCheckout}
                    type="button"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    margintop="8px"
                    onClick={() => setInDelivery(false)}
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              )}
              {!inDelivery && inCheckout && !isCompleted && (
                <>
                  <S.Title>
                    Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                  </S.Title>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxwidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxwidth="155px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        name="expiresMonth"
                        type="text"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="155px">
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <InputMask
                        id="expiresYear"
                        name="expiresYear"
                        type="text"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="9999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <Button
                    onClick={completePurchase}
                    margintop="16px"
                    type="submit"
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    margintop="8px"
                    onClick={goBackToDelivery}
                    type="button"
                    disabled={isLoading}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </>
              )}
            </form>
            {isSuccess && data && isCompleted && (
              <>
                <S.Title>Pedido realizado - {data.orderId}</S.Title>
                <S.FinalText>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </S.FinalText>
                <S.FinalText>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.{' '}
                </S.FinalText>
                <S.FinalText>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </S.FinalText>
                <S.FinalText>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </S.FinalText>
                <Button onClick={() => setIsCompleted(false)} type="button">
                  Concluir
                </Button>
              </>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
