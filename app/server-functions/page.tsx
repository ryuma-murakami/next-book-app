'use client';
import { useState, useActionState } from 'react';
import { type ActionState, checkText } from './actions';

const initialState: ActionState = {};

export default function ServerFunctions() {
  const [text, setText] = useState('');
  const [state, submitAction, isPending] = useActionState(
    checkText,
    initialState,
  );

  return (
    <form action={submitAction}>
      テキスト :
      <input
        type="text"
        name="myText"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" disabled={isPending}>
        submit!
      </button>
      {!state.error && !state.success && <p>テキストを入力してください</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>{state.success}</p>}
    </form>
  );
}
