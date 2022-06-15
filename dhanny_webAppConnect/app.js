const app = Vue.createApp({
  created() {
    window.addEventListener("load", this.checkPhantomExtension);
  },
  data() {
    return {
      details: [
        {
          values: "good",
          score: 0.75,
        },
        {
          values: "acceptable",
          score: 0.5,
        },
        {
          values: "outstanding",
          score: 1,
        },
        {
          values: "unacceptable",
          score: 0,
        },
        {
          values: "marginal",
          score: 0.25,
        },
      ],
      userdata: null,
      userdata2: null,
      equity: null,
      decentralization: null,
      participation: null,
      investment: null,
      utility: null,
      purpose: null,
      control: null,
      derivatives: null,
      connectedWallet: null,
      phantomExist: true,
    };
  },
  methods: {
    calculate() {
      if (!this.connectedWallet) {
        alert("You need to connect to your wallet!");
      } else {
        const result =
          this.equity *
          this.decentralization *
          this.participation *
          this.investment *
          this.utility *
          this.purpose *
          this.control *
          this.derivatives;

        this.userdata = result;
        this.userdata2 = result ** (1 / 9);

        console.log("Final result: ", this.userdata2);
        console.log(this.equity);
        console.log(this.decentralization);
        console.log(this.participation);
        console.log(this.investment);
        console.log(this.utility);
        console.log(this.purpose);
        console.log(this.control);
        console.log(this.derivatives);
      }
    },
    connectWallet() {
      (async () => {
        if (window.solana) {
          const solana = window.solana;
          const res = await solana.connect();
          this.connectedWallet = res.publicKey.toString();
        } else {
          alert("Wallet not found! Get a phantom wallet");
        }
      })();
    },
    checkPhantomExtension() {
      (async () => {
        try {
          if (window.solana) {
            const solana = window.solana;
            if (solana.isPhantom) {
              const res = await solana.connect({ onlyIfTrusted: true });
              this.connectedWallet = res.publicKey.toString();
            }
          } else {
            this.phantomExist = false;
            alert("Wallet not found! Get a phantom wallet");
          }
        } catch (error) {
          console.log(error);
        }
      })();
    },
  },
});
app.mount("#app");
