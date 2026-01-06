'use server';

export type ActionState = {
  error?: string;
  success?: string;
};

export const checkText = async (prevState: ActionState, formData: FormData) => {
  const text = formData.get('myText') as string;
  if (!text) {
    return {
      error: '必須項目です。テキストを入力してください',
    };
  }
  if (text.length > 10) {
    return {
      error: 'テキストは10文字以下で入力してください',
    };
  }
  return {
    success: `入力されたテキスト「${text}」は正しいです`,
  };
};
