import styles from '../../styles/Pages.module.css';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useEffect } from 'react';
import axios from 'axios';


export default function New({ navigateToPage }) {


  const baseURL = "https://api.d.aiengines.ir"

  const postData = async (url, { arg }) => {
    const res = await axios.post(baseURL + url, arg, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    if (res.status == 200) {
      if (res.data?.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        // console.log(res)
        navigateToPage("new")
        return
      }
      navigateToPage("index")
    }
    if (res.status == 422)
      console.log("it not proccessable")
    return res
  }


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    trigger(data)
  };
  console.log(errors)
  const { trigger, isMutating } = useSWRMutation("/twitter_account/users/login", postData);

  useEffect(() => {
    console.log("first")
  }, [trigger])

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <Stack textColor={"black"} spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack as={"form"} onSubmit={handleSubmit(onSubmit)} spacing={4}>
              <FormControl id="email">
                <FormLabel>UserName</FormLabel>
                <Input type="text" {...register("username", { required: "UserName is required" })} />
                {errors.username?.type == "required" && <Text>{errors.username.message}</Text>}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password", { required: "Password is required" })} />
                {errors.password?.type == "required" && <Text>{errors.password.message}</Text>}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}><Link href={"/forget"}>Forgot password?</Link></Text>
                </Stack>
                <Button
                  // onClick={() => submitHandler()}
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </main>
    </div>
  );
}