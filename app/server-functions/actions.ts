'use server';

export type UpdateFormResult =
  | {
      result: string;
      errors: null;
    }
  | {
      result?: never;
      errors: string[];
    };

export async function updateForm(title: string): Promise<UpdateFormResult> {
  return new Promise(resolve => {
    setTimeout(() => {
      const errors: string[] = [];
      if (title === '') {
        errors.push('必須項目です。テキストを入力してください');
      }
      if (title.length > 10) {
        errors.push('テキストは10文字以下で入力してください');
      }
      if (errors.length > 0) {
        resolve({ errors });
      } else {
        resolve({ result: title, errors: null });
      }
    }, 1000);
  });
}
