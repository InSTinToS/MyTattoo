import { Formik as OriginalFormik } from 'formik'
import styled from 'styled-components'

const Formik = styled(OriginalFormik)``

const Container = styled.div`
  display: flex;

  padding: 8px;
  width: 500px;
  height: 40px;
  border-radius: 16px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  form {
    &,
    input {
      width: 100%;
      height: 100%;
    }

    input {
      padding-left: 8px;

      border: none;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.secondary};

      &:-webkit-autofill {
        color: ${({ theme }) => theme.colors.secondary};
        -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;
      }
    }
  }
`

export { Container, Formik }
