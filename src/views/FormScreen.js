import React, { 
    useEffect, 
    useCallback,
    useState } from 'react';
import { 
    View, 
    TextInput, 
    Button,
    Text } from 'react-native';
import { 
    useForm, Controller } from 'react-hook-form';

const FormScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
      const [text, setText] = useState('');
      const onSubmit = data => setText("Hello "+ data.firstName+" "+data.lastName+" !");
    
      return (
        <View>
          <Controller
            control={control}
            rules={{
             required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
              placeholder='firstName'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}
    
          <Controller
            control={control}
            rules={{
             maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
              placeholder='lastName'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
    
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <Text>{text}</Text>
        </View>
      );
      };
      
// const FormScreen = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const onSubmit = useCallback(formData => {
//     console.log(formData);
//   }, []);
//   const onChangeField = useCallback(
//     name => text => {
//       setValue(name, text);
//     },
//     []
//   );

//   useEffect(() => {
//     register('email');
//     register('password');
//   }, [register]);

//   return (
//     <View>
//       <TextInput
//         autoCompleteType="email"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         placeholder="Email"
//         onChangeText={onChangeField('email')}
//       />
//       <TextInput
//         secureTextEntry
//         autoCompleteType="password"
//         placeholder="Password"
//         onChangeText={onChangeField('password')}
//       />
//       <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      
//     </View>
//   );
// };

export default FormScreen;