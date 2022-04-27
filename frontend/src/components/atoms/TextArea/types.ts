import { ComponentPropsWithoutRef } from 'react'

interface ITextAreaStyleProps {
  outline?: string
}

interface ITextAreaProps
  extends ComponentPropsWithoutRef<'textarea'>,
    ITextAreaStyleProps {}

export type { ITextAreaStyleProps, ITextAreaProps }
