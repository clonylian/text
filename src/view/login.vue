<template>
  <view>
    <div class="head_log">
      <p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</p>
      <p>{{ login }}</p>
      <p @click="zclog" style="color: rgb(154, 221, 111); cursor: pointer">
        {{ logins }}
      </p>
    </div>
    <div class="cen">
      <div class="cen1">
        <div class="head1">
          <input
            type="text"
            v-model="inputValue"
            @input="checkInput"
            placeholder="电子邮件"
          />
        </div>
        <div class="head2">
          <input
            class="head3"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="密码"
          />
          <p
            @click="toggleShowPassword"
            style="color: rgb(154, 221, 111); cursor: pointer"
          >
            {{ showPassword ? "隐藏" : "显示" }}
          </p>
        </div>
        <p style="color: red" v-if="over" class="password-empty">
          密码不能为空
        </p>
      </div>
      <div class="cen2">
        <button
          :style="{ backgroundColor: buttonColor }"
          class="cen3"
          :disabled="disableButton"
          @click="loginout"
        >
          登录
        </button>
        <p class="cen4x" @click="outlogin">{{ mmwl }}</p>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      input: "电子邮件",
      login: "登录",
      logins: "报名",
      mmwl: "忘记密码了",
      password: "",
      showPassword: false,
      inputValue: "",
      buttonColor: "#b1b1b1",
      disableButton: true,
      showPassword: false,
      over:false,
    };
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    checkInput() {
      const expectedValue = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (expectedValue.test(this.inputValue)) {
        this.buttonColor = "#9ad36f";
        this.disableButton = false;
      } else {
        this.buttonColor = "#b1b1b1";
        this.disableButton = true;
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    loginout() {
      if (this.password == "") {
        this.over=! this.over
        this.showPassword = !this.showPassword;
      } else {
        this.$router.push("/home");
      }
    },
    outlogin() {
      this.$router.push("/forget");
    },
    zclog() {
      this.$router.push("/Register");
    },
  },
};
</script>

<style scoped>
.head_log {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 0;
}

.cen1 {
  margin-top: 1rem;
}

.head_log > p:nth-child(2) {
  width: 6rem;
  font-size: 20px;
  text-align: center;
  /* text-align: right; */
}

.head_log > p:nth-child(3) {
  width: 3rem;
  font-size: 16px;
  color: gold;
  text-align: center;
}

.login {
  font-size: 20px;
  font-weight: 900;
}

.cen {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
  display: flex;
}

.cen1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cen2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head1 {
  display: flex;
  width: 100%;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 1rem 0;
}
.head1 > input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}
.head2 {
  display: flex;
  width: 100%;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  justify-content: space-around;
  align-items: center;
}

.head3 {
  width: 88%;
  border: none;
  outline: none;
  font-size: 1rem;
}

/* .head1 > input {
  height: 2.5rem;
  line-height: 3rem;
  border: none;
  outline: none;
} */

.cen2 {
  width: 100%;
  display: flex;
}

.cen3 {
  display: block;
  text-align: center;
  width: 90%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}

.cen4x {
  padding: 1rem 0 0 0;
  border-bottom: 1px blue solid;
  color: blue;
}
</style>
