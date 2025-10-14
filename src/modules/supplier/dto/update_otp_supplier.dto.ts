import { PartialType } from "@nestjs/swagger";
import { CreateSupllierOtpDto } from "./create_otp_supplier.dto";

export class UpdateSupplierOtpDto extends PartialType(CreateSupllierOtpDto) {}
