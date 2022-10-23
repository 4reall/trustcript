import axios from 'axios';
import { envConfig } from 'src/lib/envConfig';

export default axios.create({
	baseURL: `${envConfig.baseUrl}/api`,
	headers: {
		'Content-type': 'application/json',
	},
});
