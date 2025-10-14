export declare class SendOtpDto {
    mobile: string;
}
export declare class SendSupplierOtpDto {
    categoryId: number;
    store_name: string;
    city: string;
    manager_name: string;
    manager_family: string;
    mobile: string;
    invite_code: string;
}
export declare class CheckOtpDto {
    mobile: string;
    code: string;
}
