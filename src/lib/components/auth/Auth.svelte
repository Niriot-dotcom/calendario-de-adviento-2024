<script>
  import { AuthHandlers, AuthStore } from "../../../stores/AuthStore";

  let register = false;
  let email = "";
  let password = "";
  let confirmPassword = "";

  async function handleSubmit() {
    if (!email || !password || (register && !confirmPassword)) {
      return;
    }

    if (register && password === confirmPassword) {
      try {
        await AuthHandlers.signup(email, password);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await AuthHandlers.login(email, password);
      } catch (err) {
        console.log(err);
      }
    }
    if ($AuthStore.currentUser) {
      window.location.href = register ? "/nombramiento" : "/inicio";
    }
  }
</script>

<div class="container">
  <h1>{register ? "Register" : "Log in"}</h1>
  <form>
    <label>
      <input bind:value={email} type="email" placeholder="Email" />
    </label>
    <label>
      <input bind:value={password} type="password" placeholder="Password" />
    </label>
    {#if register}
      <label>
        <input
          bind:value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
      </label>
    {/if}
    <button on:click={handleSubmit}>Submit</button>
  </form>
  {#if register}
    <button
      on:click={() => {
        register = false;
      }}
      on:keydown={() => {}}
    >
      Already have an account?
      <p>Log in</p>
    </button>
  {:else}
    <button
      on:click={() => {
        register = true;
      }}
      on:keydown={() => {}}
    >
      Don't have an account? <p>Sign Up</p>
    </button>
    <button
      on:click={() => {
        AuthHandlers.resetPassword(email);
      }}
      on:keydown={() => {}}
    >
      Forgot Password?
    </button>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .container form {
    display: flex;
    flex-direction: column;
  }
</style>
