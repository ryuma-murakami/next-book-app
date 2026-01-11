'use client';
import { useState, useActionState } from 'react';
import { updateForm } from './actions';

type StateType = string[] | null;

export default function ServerFunctions() {
  const [title, setTitle] = useState('');
  const [error, submitAction, isPending] = useActionState<StateType, FormData>(
    async (_prevState, formData) => {
      const { result, errors } = await updateForm(
        formData.get('title') as string,
      );

      if (!errors) {
        setTitle(result);
      }

      return errors;
    },
    null,
  );

  return (
    <form noValidate action={submitAction}>
      <ul>
        {error?.map(msg => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>
      <div>
        <label htmlFor="title">テキスト:</label>
        <br />
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          submit!
        </button>
      </div>
      <div>
        <p>{title}</p>
      </div>
    </form>
  );
}
