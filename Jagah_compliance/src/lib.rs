use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,

};
use std::convert::TryInto;

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult{

    let (key, rem)= instruction_data.split_first().unwrap(); 
   
    let value: u64 = rem
    .get(0..8)
    .and_then(|slice| slice.try_into().ok())
    .map(u64::from_le_bytes)
    .unwrap_or(0);

   
    let compliance_score: f64 = value as f64 / 100 as f64;

    msg!("Choice Coin Solana Compliance");
    msg!("Compliance Score: {:?}", compliance_score);


    msg!("program id: {}, accounts: {}, instructions: {:?}",
        program_id, 
        accounts.len(),
        instruction_data
    );

    Ok(())
}