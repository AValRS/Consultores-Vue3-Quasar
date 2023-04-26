import { boot } from 'quasar/wrappers'
import { defineRule, configure } from 'vee-validate'
import AllRules from "@vee-validate/rules";

configure({
    generateMessage: (context) => {
        const messages = {
            required: `El campo ${context.field} es requerido.`,
            min: `This field ${context.field} is too short.`,
            max: `This field ${context.field} is too long.`,
            alpha_spaces: `This field ${context.field} can only contain letters and spaces.`,
            email: `El campo ${context.field} no es un email valido.`,
            min_value: `This field ${context.field} is too low.`,
            max_value: `This field ${context.field} is too high.`,
            excluded: "This field is not allowed.",
            country_excluded: "We do not allow users from this location",
            password_mismatch: `This field ${context.field} does not match.`
        };
        const message = messages[context.rule.name]
            ? messages[context.rule.name]
            : `The field ${context.field} is invalid`;
        return message;
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true
});

Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});


export default {

}

/* export default boot(async () => {

}) */
