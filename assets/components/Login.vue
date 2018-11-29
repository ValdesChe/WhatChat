<template>

  <el-row :gutter="10" >
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <h1>Connectez vous !</h1>

      <el-form-item>
          <p v-if="errorServer !=''" class="error-message">{{ errorServer }}</p>
      </el-form-item>
      <el-form-item  prop="email">
        <el-input type="email" placeholder="Email" v-model="ruleForm2.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="ruleForm2.password" autocomplete="off"></el-input>
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
  </el-row>
</template>
<script>
import auth from '../auth'
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
            //alert('submit!');
            auth.login(this, this.ruleForm2);
          } else {
            console.log('error submit!!');
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


<!-- <template>

  <div class="login-page">
    <div class="form">
      <p class="redirect-message" v-if="$route.query.redirect">
        You need to login first
      </p>
      <form class="login-form" @submit.prevent="login">
        <input
          type="text"
          placeholder="Enter your username"
          v-model="credentials.username"
        >
        <p class="field-message" v-if="errors.username">{{ errors.username }}</p>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
        <p class="field-message" v-if="errors.password">{{ errors.password }}</p>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button type="submit">Login</button>
        <p class="message">
          Not registered?
          <router-link to="signup">Create an account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// import auth from '../auth'
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials)
    }
  },
  methods: {
    login() {
      this._validateLoginForm()
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      if(this.credentials.username && this.credentials.password){
        // auth.login(this, {session: credentials}, '/')
        this.errors = { username: "", password: "" }
      }
    },
    _validateLoginForm() {
      this.error = ""
      if(!this.credentials.username && !this.credentials.password){
        this.errors = {
          username: "can't be blank",
          password: "can't be blank",
        }
        return
      }
      if(!this.credentials.username){
        this.errors = {
          username: "can't be blank",
          password: ""
        }
        return
      }
      if(!this.credentials.password){
        this.errors = {
          username: "",
          password: "can't be blank"
        }
        return
      }
    }
  }
}
</script>
<style scoped>
  .redirect-message {
    margin-top: 0px;
    margin-bottom: 40px;
    font-size: 17px;
    color: #4caf50;
    font-weight: bold;
    text-transform: uppercase;
  }
  .error-message {
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 15px;
    color: rgba(190, 64, 62, 0.65);
  }
</style> -->
