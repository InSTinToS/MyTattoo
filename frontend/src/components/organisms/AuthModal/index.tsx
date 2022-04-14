import { useAuthModal } from './logic'
import { AuthModalStyle } from './styles'
import type { IAuthModalProps } from './types'

import SignUp from '../SignUp'

import Arrow from 'components/atoms/icons/Arrow'
import Close from 'components/atoms/icons/Close'

const AuthModal = (props: IAuthModalProps) => {
  const { theme, toggleShowAuthModal, page } = useAuthModal()

  return (
    <AuthModalStyle {...props}>
      {page === 'sign-in' && (
        <section>
          <nav>
            <Close
              size={16}
              color={theme.colors.secondary}
              onClick={() =>
                toggleShowAuthModal({ page: 'sign-in', open: false })
              }
            />
          </nav>

          {/* <form>
            <InputLabel>
              <label htmlFor=''>Nome de usuário ou E-mail</label>

              <Input />
            </InputLabel>

            <InputLabel>
              <label htmlFor=''>Senha</label>

              <Input />
            </InputLabel>

            <SignInButton>Entrar</SignInButton>

            <ModalButton
              onClick={() =>
                toggleShowAuthModal({ page: 'sign-up', open: true })
              }
            >
              Cadastrar
            </ModalButton>

            <GoogleButton icon={<Google size={24} />}>
              Entrar com o Google
            </GoogleButton>
          </form> */}
        </section>
      )}

      {page === 'sign-up' && (
        <section id='sign-up'>
          <nav>
            <Arrow
              size={24}
              color={theme.colors.secondary}
              style={{ transform: 'rotate(-90deg)' }}
              onClick={() =>
                toggleShowAuthModal({ page: 'sign-in', open: true })
              }
            />

            <Close
              size={16}
              color={theme.colors.secondary}
              onClick={() =>
                toggleShowAuthModal({ page: 'sign-in', open: false })
              }
            />
          </nav>

          <SignUp />
        </section>
      )}
    </AuthModalStyle>
  )
}

export default AuthModal
