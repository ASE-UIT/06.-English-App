import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class VnpayIPNRequest {
  @IsNumber()
  @IsNotEmpty()
  vnpAmount: number;

  @IsString()
  @IsNotEmpty()
  vnpBankCode: string;

  @IsOptional()
  @IsString()
  vnpBankTranNo: string;

  @IsString()
  @IsNotEmpty()
  vnpCardType: string;

  @IsString()
  @IsNotEmpty()
  vnpOrderInfo: string;

  @IsString()
  @IsNotEmpty()
  vnpPayDate: string;

  @IsString()
  @IsNotEmpty()
  vnpResponseCode: string;

  @IsString()
  @IsNotEmpty()
  vnpTmnCode: string;

  @IsNumber()
  @IsNotEmpty()
  vnpTransactionNo: number;

  @IsString()
  @IsNotEmpty()
  vnpTransactionStatus: string;

  @IsNumber()
  @IsNotEmpty()
  vnp_TxnRef: number;

  @IsString()
  @IsNotEmpty()
  vnpSecureHash: string;
}
