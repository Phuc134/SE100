const {check} = require('express-validator');
const {body} = require('express-validator');
const supplier = require('../../models/supplier');

let validateAddSupplier = () => {
    return [
        check('name', 'Tên nhà cung cấp không được bỏ trống.').notEmpty(),
        check('phone', 'Số điện thoại không được bỏ trống').notEmpty(),
        check('email', 'Email không được bỏ trống').notEmpty(),
        check('address', 'Địa chỉ không được trống').notEmpty(),
        check('phone', 'Số điện thoại chỉ chứa số').isNumeric(),
        check('email', 'Email không đúng định dạng').isEmail(),
        body('phone').custom( async value => {
            const p = await supplier.findOne({ phone: value });
            if (p) {
                return Promise.reject('Số điện thoại này đã được sử dụng.');
            }
        }),
        body('name').custom( async value => {
            const p = await supplier.findOne({ name: value });
            if (p) {
                return Promise.reject('Tên nhà cung cấp này đã được sử dụng.');
            }
        }),
        body('email').custom( async value => {
            const p = await supplier.findOne({ email: value });
            if (p) {
                return Promise.reject('Email này đã được sử dụng.');
            }
        })
    ];
}

let validateUpdateSupplier = () => {
    return [
        check('name', 'Tên nhà cung cấp không được bỏ trống.').notEmpty(),
        check('phone', 'Số điện thoại không được bỏ trống').notEmpty(),
        check('email', 'Email không được bỏ trống').notEmpty(),
        check('address', 'Địa chỉ không được trống').notEmpty(),
        check('phone', 'Số điện thoại chỉ chứa số').isNumeric(),
        check('email', 'Email không đúng định dạng').isEmail(),
        body('name').custom(async (value, {req}) => {
            const p = await supplier.findOne({_id: req.params.id});
            const q = await supplier.findOne({name: value});
            if(q && p.id != q.id){
                return Promise.reject('Tên nhà cung cấp này đã được sử dụng')
            }
        }),
        body('phone').custom(async (value,{req}) => {
            const p = await supplier.findOne({_id : req.params.id});
            const q = await supplier.findOne({phone: value});
            if(q && p.phone != q.phone){
                return Promise.reject('Số điện thoại này đã được sử dụng')
            }
        }),
        body('email').custom(async (value,{req}) => {
            const p = await supplier.findOne({_id : req.params.id});
            const q = await supplier.findOne({email: value});
            if(q && p.email != q.email){
                return Promise.reject('Email này đã được sử dụng')
            }
        })
    ]
}

let validatorSupplier = {
    validateAddSupplier : validateAddSupplier,
    validateUpdateSupplier : validateUpdateSupplier,
};

module.exports = {validatorSupplier};