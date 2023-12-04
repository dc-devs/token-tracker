import { Reporter } from './reporter';
import { PubSubEvent } from './common/enums';
import { pubSub } from './common/util-classes';
import { TokenPairTracker } from './token-pair-tracker';

const reporter = new Reporter();
const tokenPairTracker = new TokenPairTracker();

// emits: PubSubEvent.NewTokenPairCreated
tokenPairTracker.start();

// TODO: DoubleCheck the DeFi api seems like some data points "centralized controls"

pubSub.on(
	PubSubEvent.NewTokenPairCreated,
	async ({ token0, token1, reserve0, reserve1, pairAddress }) => {
		setTimeout(async () => {
			reporter.logTokenPair({
				token0,
				token1,
				reserve0,
				reserve1,
				pairAddress,
			});
		}, 60000);
	},
);
