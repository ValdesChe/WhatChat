<template>

  <el-row :gutter="10" >
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <h1 style="padding-top:25px; font-size:25px; text-align:center">Welcome to WhatChat  ! </h1>
      

      <el-form-item>
        <el-alert v-if="errorServer !=''"
          :title="errorServer"
          type="error"
          description="Please trying again..."
          show-icon>
        </el-alert>
      </el-form-item>

      <el-form-item  prop="email">
        <el-input type="email" placeholder="Email" v-model="ruleForm2.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="ruleForm2.password" autocomplete="off"
            @keyup.enter="submitForm('ruleForm2')"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
        <el-button @click="resetForm('ruleForm2')">Reset</el-button>

        <p class="message">
          Not registered? 
          <router-link to="signup">Create an account</router-link>
        </p>
      </el-form-item>

    </el-form>
    <h1 style="padding-top:25px; font-size:25px; text-align:center">By [ V@ldor Che ]  && [F@ymir] ! </h1>

  </el-row>
</template>
<script>
  import auth from './../../auth'
  export default {
    data() {
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the email'));
        }
        setTimeout(() => {
          const pattern =/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,10}$/;
          if (!value.match(pattern)) {
            callback(new Error('Please enter valid digits.'));
          } else {
            if (value.length < 5 ) {
              callback(new Error('Email must be greater than 5 characters.'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (value.length < 4 ) {
            callback(new Error('Password must be greater than 4 characters.'));
          } else {
            callback();
          }
        }
      };

      return {
        errorServer: '',
        ruleForm2: {
          email: '',
          password: ''
        },
        rules2: {

          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            auth.login(this , this.ruleForm2).then((resp) =>{
              window.localStorage.setItem('id_token', resp.data.user.id);
              window.localStorage.setItem('v_username', resp.data.user.username);
              window.localStorage.setItem('v_email', resp.data.user.email);
              window.localStorage.setItem('v_image', resp.data.user.image);

              window.userToken = resp.data.user.token
              localStorage.setItem('token',resp.data.user.token)
              location.reload(); 

            },  (err) => {
              console.warn("Error during login ! ");
              console.log(err);
              this.errorServer = err.response.data.errors.detail
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .el-form{
     width: 600px;
     padding-top: 10px;
     margin: 0 auto;
  }
</style>

