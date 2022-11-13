import React from 'react'
import { useState } from 'react'

function BreedForm() {
    const [form, setForm] = useState('');




  return (
    <div>
        <label>
        Search Breed
        <input value={form} onChange={e => setForm(e.target.value)}/>
        </label>
        <p>
            {form}
        </p>
    </div>
  )
}

export default BreedForm