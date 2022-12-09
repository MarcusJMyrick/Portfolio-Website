import sanityClient from '@sanity/client';
import imageUrlBuilder from 'sanity/image-url';

export const client = sanityClient ({
    projectId: 'qgh1i142',
    dataset: 'production',
    apiVersion: '2022-11-14',
    useCdn: true,
    token: 'sk1rYKSdlUlj1RFng87qUvYVBkn905gyP8sP8Seprs22DRV6rjZYUXcgZFmqTB1a2mpEveoD0gNMYWY2Zki2P4Q65x5Qv7vuyDQSsbZK2yb4H4vXVDT5kTWHLZsVTPbnpJdRVbipGO9SazsKCOp19cmqqc7lQ4omY5XnBRGkx6Fy34nOiS8L',
});