import messages from './messages.js'

export default {
    CONFIRM_PASSWORD(password) {
        return v => {
            if (!v)
                return messages.PASSWORD_MATCH_ERROR
            if (v == password)
                return true
            return messages.PASSWORD_MATCH_ERROR;
        }
    },
    PASSWORD: [v => !!v || messages.PASSWORD_ERROR,
        v => v.length > 8 || messages.PASSWORD_LENGTH_ERROR,
    ],
    MOBILE: [
        v => !!v || messages.MOBILE_NUMBER_ERROR,
        v => {
            if (!isNaN(parseFloat(v)) && v >= 5000000000 && v <= 999999999999) return true;
            return messages.INVALID_MOBILE_NUMBER_ERROR;
        }
    ],
    OPTIONAL_MOBILE: [
        v => {
            if (!v)
                return true
            if (!isNaN(parseFloat(v)) && v >= 5000000000 && v <= 999999999999) return true;
            return messages.INVALID_MOBILE_NUMBER_ERROR;
        }
    ],
    EMAIL: [
        v => !!v || messages.EMAIL_ERROR,
        v => /.+@.+\..+/.test(v) || messages.EMAIL_MUST_BE_VALID,
    ],
    COMMENT: [
        v => !!v || '',
    ],
    REQUIRED_FIELD(field_name) {
        return v => {
            if (!v)
                return field_name + " can not be Empty";
            return true
        }
    },

    REQUIRED_LIST_FIELD(field_name) {
        return v => {
            if (!v)
                return field_name + " can not be Empty";
            if (v.length == 0)
                return field_name + " can not be Empty";
            return true
        }
    },
    REQUIRED_NUMBER_FIELD(field_name) {
        return v => {
            if (!v)
                return field_name + " can not be Empty";
            if (!isNaN(parseFloat(v)) && v >= 1 && v <= 999999999999)
                return true;
            return field_name + " must be number";
        }
    },
    NUMBER_FIELD(field_name) {
        return v => {
            if (!v)
                return true;
            if (!isNaN(parseFloat(v)) && v >= 1 && v <= 999999999999)
                return true;
            return field_name + " must be number";
        }
    },
    PIN_CODE(field_name) {
        return v => {
            if (!v)
                return field_name + " can not be Empty";
            if (!isNaN(parseFloat(v)) && v.length == 6)
                return true;
            return field_name + " must be valid";
        }
    },
    IFSC_CODE: [
        v => !!v || messages.IFSC_CODE,
        v => /^[A-Za-z]{4}\d{7}$/.test(v) || messages.IFSC_CODE,
    ],
    ACCOUNT_NUMBER: [
        v => !!v || messages.ACCOUNT_NUMBER,
        v => /^[0-9]{9,25}$/.test(v) || messages.ACCOUNT_NUMBER,
    ],
    CONFIRM_ACCOUNT_NUMBER(account_number) {
        console.log('account_number=', account_number)
        return v => {
            // if (!v)
            //     return account_number.ACCOUNT_NUMBER_MISMATCH
            if (v == account_number)
                return true
            return messages.ACCOUNT_NUMBER_MISMATCH;
        }
    },
    REQUIRED_FILE: [
        v => !!v || messages.FILE_ERROR,
        v => !v || v.size < 2000000 || 'Avatar size should be less than 3 MB!',
    ]

}


