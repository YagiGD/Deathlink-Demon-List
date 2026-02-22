export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            required: true,
        },
        verifier: {
            type: String,
            required: true,
        },
    },
    template: `
    `,

    computed: {
        selfVerified() {
            return this.author === this.verifier && this.creators.length === 0;
        },
    },
};
