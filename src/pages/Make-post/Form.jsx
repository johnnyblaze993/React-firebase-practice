import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Form = () => {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //creates a reference so which collection we want to add the data to
  const postsRef = collection(db, 'Posts');

  //function to add data to the database
  const onCreatePosts = async (data) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      id: user?.uid,
    });
    //clears the form after submitting
  



  };

  return (
    <form onSubmit={handleSubmit(onCreatePosts)}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register('title')}
      />
      <p
        style={{
          color: 'red',
        }}
      >
        {errors.title?.message}
      </p>
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        {...register('description')}
      />
      <p
        style={{
          color: 'red',
        }}
      >
        {errors.description?.message}
      </p>
      <Button
        sx={{
          marginTop: '1rem',
        }}
        variant="contained"
        fullWidth
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
