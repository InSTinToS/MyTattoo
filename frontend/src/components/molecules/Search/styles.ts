import styled from 'styled-components'

import { Formik as OriginalFormik } from 'formik'

const Formik = styled(OriginalFormik)``

const Container = styled.div`
  display: flex;

  padding: 8px;
  width: 500px;
  height: 40px;
  border-radius: 16px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  form {
    width: 100%;
    height: 100%;
  }
`

export { Container, Formik }
