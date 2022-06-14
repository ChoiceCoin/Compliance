const app=Vue.createApp({
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
			};
		},
		methods: {
			calculate() {
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
			},
		},
})
app.mount("#app")
