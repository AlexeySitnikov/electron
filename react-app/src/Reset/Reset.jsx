import { Button } from '../Buttons/Button'

export function Reset({ setSelectedFiles }) {
  const reset = () => {
    setSelectedFiles(null)
  }
  return (
    <Button
      buttonName="Reset"
      onClickFunction={reset}
    />
  )
}
