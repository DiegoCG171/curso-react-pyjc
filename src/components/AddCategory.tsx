import { useState } from "react"

interface Props {
    addCategory: (value: string) => void;
}

export const AddCategory = ({ addCategory }: Props) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: any) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addCategory(inputValue)
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={handleChange} />
    </form>
  )
}
