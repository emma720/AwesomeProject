import React, { 
    useEffect, 
    useCallback,
    useState } from 'react';
import { 
    View, 
    TextInput, 
    Button,
    Text,
    FlatList,
    ActivityIndicator } from 'react-native';
import { 
    useForm, Controller } from 'react-hook-form';

const FormScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          email : '',
          login: ''
        }
      });
      const [text, setText] = useState('');
      const [isLoading, setLoading] = useState(true);
      const onSubmit = data => sendRequest(data);
      const [respData, setRespData] = useState('');
      
      
      
      const sendRequest = async (data) => {
        try{
            const resp = await fetch("https://myskilou.com/php/connexion.php", {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: "inputEmail="+data.email+"&inputPassword="+data.password
            });
            respd = await resp.text();
            setRespData(respd);
        }
        catch(error){
            console.error(error);
        }
       finally {
        setLoading(false);
      }
        
      };


      return (
        <View>
          <Controller
            control={control}
            rules={{
             required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
              placeholder='email'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.username && <Text>required field</Text>}
    
          <Controller
            control={control}
            rules={{
             maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder='password'
                secureTextEntry={true}
                onBlur={onBlur}

                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text>required field</Text>}

    
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <Text>{text}</Text>

          
          {isLoading ? <ActivityIndicator/> : (<Text>{respData}</Text>
        )}
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