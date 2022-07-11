import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInptuValue] = useState('')

    const onInputChange = (event) => {
        setInptuValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInptuValue('')

    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}

        />
    </form>
  )
}
