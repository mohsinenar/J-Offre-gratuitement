<template>
        <b-modal  style="padding:15px" size="is-small" has-modal-card :active="isActive">
              <b-notification auto-close @close="close" :type="messageType" has-icon aria-close-label="Close notification">{{messageText}}</b-notification>
        </b-modal>
</template>
<script>
export default {
  data: () => {
    return {
      errors : {
    "auth/argument-error": "",
    "auth/app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "auth/app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "auth/captcha-check-failed": "",
    "auth/code-expired": "",
    "auth/cordova-not-ready": "Cordova framework is not ready.",
    "auth/cors-unsupported": "This browser is not supported.",
    "auth/credential-already-in-use": "This credential is already associated with a different user account.",
    "auth/custom-token-mismatch": "The custom token corresponds to a different audience.",
    "auth/requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "auth/dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "auth/email-already-in-use": "The email address is already in use by another account.",
    "auth/expired-action-code": "The action code has expired. ",
    "auth/cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "auth/internal-error": "An internal error has occurred.",
    "auth/invalid-app-credential": "",
    "auth/invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "auth/invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
    "auth/invalid-auth-event": "An internal error has occurred.",
    "auth/invalid-verification-code": "",
    "auth/invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "auth/invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "auth/invalid-email": "The email address is badly formatted.",
    "auth/invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "auth/invalid-credential": "The supplied auth credential is malformed or has expired.",
    "auth/invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "auth/invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "auth/unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "auth/wrong-password": "The password is invalid or the user does not have a password.",
    "auth/invalid-identifier-number": "",
    "auth/invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "auth/invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "auth/invalid-verification-id": "",
    "auth/missing-iframe-start": "An internal error has occurred.",
    "auth/auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "auth/missing-app-credential": "",
    "auth/missing-verification-code": "",
    "auth/missing-identifier-number": "",
    "auth/missing-verification-id": "",
    "auth/app-deleted": "This instance of FirebaseApp has been deleted.",
    "auth/account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "auth/network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "auth/no-auth-event": "An internal error has occurred.",
    "auth/no-such-provider": "User was not linked to an account with the given provider.",
    "auth/operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "auth/operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "auth/popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "auth/popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "auth/provider-already-linked": "User can only be linked to one identity for the given provider.",
    "auth/quota-exceeded": "",
    "auth/redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "auth/redirect-operation-pending": "A redirect sign-in operation is already pending.",
    timeout: "The operation has timed out.",
    "auth/user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "auth/too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "auth/user-cancelled": "User did not grant your application the permissions it requested.",
    "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "auth/user-disabled": "The user account has been disabled by an administrator.",
    "auth/user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "auth/user-signed-out": "",
    "auth/weak-password": "The password must be 6 characters long or more.",
    "auth/web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
}
    };
  },
  computed:{
    isActive:function(){
      return this.$store.state.isMessageActive
    },
    messageText:function(){
      if(this.errors.hasOwnProperty(this.$store.state.message.text)){
        return this.errors[this.$store.state.message.text]
      } 
      return this.$store.state.message.text
    },
    messageType:function (){
      return this.$store.state.message.type
    }
  },
  methods:{
    close:function(){
     this.$store.dispatch("closeMessage")
    }
  },
  name: "NotificationCenter",
};
</script>

<style>
</style>