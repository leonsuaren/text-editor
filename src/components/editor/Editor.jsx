import React, { useState } from 'react';
import { useFormik } from 'formik';

import * as com from '../../components';
import * as styled from './index';

export const Editor = () => {
  const [title, setTitle] = useState('');
  const [textContent, setTextContent] = useState('');

  const [boldStyled, setBoldStyled] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      textContent: ''
    },
    onSubmit: values => {
      setTitle(values.title);
      setTextContent(values.textContent);
    }
  });

  const handleOnBoldStyled = () => {
    setBoldStyled(s => !s);
  };

  console.log({title: title,text: textContent});

  return (
    <styled.EditorWrapper>
      <com.EditorTools handleOnBoldStyled={handleOnBoldStyled} />
      <styled.FormWrapper onSubmit={formik.handleSubmit} id='text-editor'>
        <com.InputTitle type='text' placeholder='Your Idea in Short!' name='title' id='title' value={formik.values.title} onChange={formik.handleChange} />
        <com.InputText type='text' placeholder='Tell your story!' name='text-content' id='text-content' value={formik.values.textContent} onChange={formik.handleChange} />
      </styled.FormWrapper>
    </styled.EditorWrapper>
  )
}