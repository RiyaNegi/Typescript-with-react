import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from "./components/List"

export interface IState {
  form: {
    name: string,
    rate: number,
    review?: string
  }[]
}

function App() {
  const [form, setForm] = useState<IState["form"]>([
    {
      name: "Spirited Away",
      rate: 9,
      review: "Beautifully written"
    },
    {
      name: "Mean Girls",
      rate: 7.5,
      review: "Classic chick flick for girl's night out"
    }
  ])

  return (
    <div className="App">
      <h1 className="title">My Watch List</h1>
      <div className="form-card">
        <List form={form} />
        <Form form={form} setForm={setForm} />
      </div>
    </div>
  );
}

export default App;
