export default {
    // PROJECT:"IM",
    // BASE_URL: "https://api.indianmentors.in/api",
  
    PROJECT:"TF",
    BASE_URL: "https://api.tutorsfactory.com/api",
  
    // BASE_URL: "http://localhost:8000/api",
  
    LOGIN: "/users/login/",
    SIGNUP: "/users/signup/",
    FORGOT_PASSWORD: "/users/forget-password/",
    RESEND_OTP: "/users/resend-otp/",
    VERIFY_OTP: "/users/verify-otp/",
    RESET_PASSWORD: "/users/reset-password/",
    TOGGLE_ACCOUNT_STATUS: "/users/toggle-account-status/",
  
    /* Over view*/
    ADMIN_OVERVIEW: "/stats/overview/",
  
    /* master api */
    TIME_SLOT_LIST: "/master/time-slot-list/",
    GRADE_LIST: "/master/grade-list/",
    CLASS_LIST: "/master/class-list/",
    CITY_LIST: "/master/city-list/",
    CITY: "/master/city/",
    TICKET_CATEGORY: "/master/ticket_category/",
  
    MATCH_PIN_CODE: "/master/match/pin-code/",
    LIST_PIN_CODE: "/master/list/pin-code/",
    TOGGLE_SERVICEABLE_PIN_CODE: "/master/toggle/serviceable-pin-code/",
  
    /* subscription plan */
    ADD_SUBSCRIPTION_PLAN: "/subscription/add/plan/",
    LIST_SUBSCRIPTION_PLAN: "/subscription/list/plan/",
    SUBSCRIPTION_PLAN_DETAIL: "/subscription/get/plan-details/",
    DELETE_SUBSCRIPTION_PLAN: "/subscription/delete/plan/",
    ACTIVATE_SUBSCRIPTION_MANUAL: "/subscription/activate-subscription-manual/",
    SUBSCRIPTION_PREVIEW: "/subscription/subscription-preview/",
    GET_INVOICE: "/subscription/get-invoice/?std_subscription_plan_id=",
  
    SUBSCRIPTION_HISTORY: "/subscription/subscription-history/",
    STUDENT_SUBSCRIPTION_DETAILS: "/subscription/student-subscription-details/",
    SUBSCRIPTION_PAYMENT: "/subscription/init-payment/",
    INIT_PAYMENT: "/payments/rzp-init-payment/",
  
    PAYMENTS_INIT_PAYMENT: "/payments/init-payment/",
    SUBSCRIPTION_PAYMENT_LIST: "/payments/subscription-payment-list/",
    CHANGE_PAYMENT_STATUS: "/payments/change-payment-status/",
  
    /*student api*/
    GET_STUDENT_DETAILS: "/student/get/details/",
    EDIT_DETAIL: "/student/add/basic-details/",
    STUDENT_LIST: "/student/list/",
  
    /*Tutor api*/
    GET_TUTOR_DETAILS: "/tutor/get/details/",
    GET_TUTOR_LIST: "/tutor/list/",
    TUTOR_ADD_ACADEMIC_DATA: "/tutor/add/academic-data/",
    TUTOR_ADD_ADDRESS_DATA: "/tutor/add/address-data/",
    TUTOR_ADD_PROFESSIONAL_DATA: "/tutor/add/professional-data/",
    TUTOR_AUTOCOMPLETE: "/tutor/autocomplete/",
    SCHEDULE_INTERVIEW: "/tutor/schedule-interview/",
    INTERVIEW_RESULT: "/tutor/interview-result/",
    START_AGREEMENT: "/tutor/start-agreement/",
  
    UPLOAD_DOCUMENT: "/tutor/upload-document/",
    GET_TUTOR_DOCUMENTS: "/tutor/get-document/",
  
    PROFILE_SETTINGS: "/tutor/settings/",
  
    /* Batch*/
    BATCH_LIST: "/batch/list/",
    BATCH_CREATE: "/batch/create/",
    BATCH_DETAILS: "/batch/details/",
  
    SESSION_LIST: "/batch/session-list/",
    SESSION_DETAILS: "/batch/session-details/",
    SESSION_START: "/batch/start-session/",
    DEMO_LIST: "/batch/demo-list/",
    SCHEDULE_DEMO: "/batch/schedule-demo/",
    DEMO_DETAILS: "/batch/demo-details/",
    DEMO_CHANGE_STATUS: "/batch/demo-status-change/",
  
    EXTEND_SESSION: "/batch/extend-session/",
    ASSIGN_HOMEWORK: "/batch/assign-homework/",
    CHANGE_HOMEWORK_STATUS: "/batch/change-homework-status/",
  
    START_UNIT_TEST: "/batch/start-unit-test/",
    UNIT_TEST_LIST: "/batch/unit-test-list/",
  
    /* Lead  api*/
    LEAD_LIST: "/leads/list/",
    LEAD_ACTION: "/leads/action/",
    COMMENT_LIST: "/leads/list/comment/",
    COMMENT_ADD: "/leads/add/comment/",
  
    MY_WALLET: "/payouts/my-wallet/",
    ADD_BANK_DETAILS: "/payouts/add/bank-details/",
    CREATE_PAYOUT: "/payouts/create/payout/",
  
    BDA_AUTO_COMPLETE: "/bda/auto_complete/",
    BDA_ADD: "/bda/add/",
    BDA_DETAILS: "/bda/details/",
    BDA_LIST: "/bda/list/",
  
    RAISE_TICKET: "/support/raise/ticket/",
    LIST_TICKET: "/support/list/ticket/",
    CLOSE_TICKET: "/support/close/ticket/",
    DETAILS_TICKET: "/support/details/ticket/",
    ADD_COMMENT: "/support/add/comment/",
  };
  