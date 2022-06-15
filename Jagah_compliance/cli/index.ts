import * as web3 from "@solana/web3.js";
const BN = require("bn.js");

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

let intuition=1/9;
   

function knowledge (knowledge:number[]){
  let result=1;
  
  knowledge.forEach((value)=>{
      result *= value;
  })

  return result;
}

function intelligence(knowledge:number, intuition:number){
    return knowledge ** intuition; 
}


async function main(){
    let compliance_score=(intelligence(knowledge([1,2]) , intuition) ) * 100;
    const key: Uint8Array = Uint8Array.from([143,178,42,159,144,247,221,204,149,229,62,137,46,249,157,234,118,244,14,46,11,156,71,13,80,82,184,202,69,38,93,135,178,144,16,12,21,152,24,20,20,52,216,111,1,36,234,174,6,197,184,120,252,130,196,17,13,111,133,208,228,131,33,253]);
    
        const signer = web3.Keypair.fromSecretKey(key);
        const publickey=signer.publicKey;
        
       
    let programId: web3.PublicKey = new web3.PublicKey("DJXJC8WtjLS5ad3Gswtdz9boHH8gN6WCyYHppNTNZf1o");
    
    const data_to_send: Buffer = Buffer.from(
            
        Uint8Array.of(0,
       ...new BN(compliance_score).toArray("le", 8))

        );

   // console.log(data_to_send)

    let transaction: web3.Transaction = new web3.Transaction();

    transaction.add(
        new web3.TransactionInstruction({
            keys: [
                {pubkey: publickey, isSigner: true, isWritable: true}],
            programId,
            data: data_to_send
        })
    );
    await web3
    .sendAndConfirmTransaction(connection, transaction, [signer])
    .then((sig)=> {
        console.log("sig: {}", sig);
    });
}

main();


