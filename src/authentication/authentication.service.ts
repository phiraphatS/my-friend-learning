import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {

  constructor(
    @InjectRepository(Account)
    private AccountRepository: Repository<Account>,
) {}

async loginpProcess (username : string, password : string){
  try{
    const resAccount = await this.AccountRepository.find();
    
    return  resAccount
  }catch (err) {
    throw err.message
  }
}
}