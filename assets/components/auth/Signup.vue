<template>
  <div class="login-page">

  <el-row :gutter="10" >
    <el-form :model="signUpRuleForm" status-icon :rules="signUpRules" ref="signUpRuleForm" label-width="120px" class="demo-ruleForm">
      <h1 style="padding-top:25px; font-size:25px; text-align:center">Welcome to WhatChat  ! </h1>
      <span>It's free ..</span>
      <el-form-item  prop="username">
        <el-input type="text" placeholder="Username" v-model="signUpRuleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop="email">
        <el-input type="email" placeholder="Email" v-model="signUpRuleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="signUpRuleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="confirm_password">
        <el-input type="password" placeholder="Confirm Password" v-model="signUpRuleForm.confirm_password" autocomplete="off"
            @keyup.enter="submitForm('signUpRuleForm')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('signUpRuleForm')">Create account</el-button>
        <el-button @click="resetForm('signUpRuleForm')">Reset</el-button>
        <p class="message">
          Already registered? <router-link :to="{ name: 'login'}">Login</router-link>
        </p>
      </el-form-item>
    </el-form>
  </el-row>
  </div>
</template>
<script>
  import auth from './../../auth'
  export default {
    data() {
      // Validate username function

      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the email'));
        }
        setTimeout(() => {
          const pattern =/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,10}$/;
          if (value.trim().length < 5 || value.trim().length > 15 ) {
            callback(new Error('Username must be between [5 - 15] characters.'));
          } else {
            callback();
          }
        }, 1000);
      };

      // Validate user mail
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the email'));
        }
        setTimeout(() => {
          const pattern =/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,10}$/;
          if (!value.match(pattern)) {
            callback(new Error('Please enter a valid email.'));
          } else {
            if (value.length < 5 ) {
              callback(new Error('Email must be greater than 5 characters.'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      // Validate password function
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

      // Confirm password check
      var validateConfirmPass = (rule, value, callback) => {
        if (this.signUpRuleForm.password.trim() !== value) {
          callback(new Error('Please fill confirm password input'));
        } else {
          callback();
        }
      };

      return {
        errorServer: '',
        signUpRuleForm: {
          username: '',
          email: '',
          password: '',
          confirm_password: ''
        },
        signUpRules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirm_password:  [
            { validator: validateConfirmPass, trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            auth.signup(this , this.signUpRuleForm).then((resp) =>{
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
