const User = require("../model//user");
//test
const login = async ({ name, email, phone, active }) => {
    try {
        const rs = await User.findOne({ phone });

        if (!rs) {
            await User.create({ name, email, phone });
            return "created";
        }

        return "logged";
    }
    catch (error) {
        return error;
    }
}

const createGuest = async ({ name, email, phone, active = false }) => {
    const rs = await User.findOne({ phone });
    if (!rs) {
        await User.create({ name, email, phone, active });
        return "account guest created";
    }
    return "exist guest account";
}

const update = async ({ name, email, phone, active }) => {
    const id = await User.findOne({ phone }).id;
    const rs = await User.findOneAndUpdate({ id }, { $set: { name, email, phone, active } }, { new: true }, (err, doc) => {
        if (err) return "update error";
        if (doc) return "update doc";
    });
    return "update success";
}

const changeStatusActive = async ({ phone, otp }) => {
    const rs = await User.findOne({ phone });
    if (!rs) {
        return "phone number has not been created";
    }
    if (otp === "111111") {
        const name = rs.name;
        const email = rs.email;
        const active = true;
        update({ name, email, phone, active });
        return "change active success";
    }
    return "change active fail";
}

module.exports = { login, createGuest, update, changeStatusActive };