const path = require('path');

module.exports = {
    CHAINCODE_DEV_SETUP_PACKAGE: '@kunstmaan/hyperledger-fabric-chaincode-dev-setup',
    CHAINCODES_DIR_NAME: 'chaincodes',
    CONFIG_KEY: 'kuma-hf-chaincode-dev',
    CONFIG_CHAINCODES_KEY: 'chaincodes',
    CONFIG_SOURCE_PATH_KEY: 'sourcePath',
    CONFIG_BUILD_PATH_KEY: 'buildPath',
    CONFIG_TEST_PATH_KEY: 'testPath',
    CONFIG_DOCKER_FILE_KEY: 'dockerFile',
    CONFIG_CHAINCODE_DESTINATION_KEY: 'chaincodeDestination',
    CONFIG_DEV_DEPENDENCIES: [
        'jest',
        '@kunstmaan/hyperledger-fabric-chaincode-dev-setup'
    ],
    CONFIG_SCRIPTS: {
        'clean': 'rm -rf ./build && kuma-hf-chaincode-dev cleanup-chaincode',
        'start': 'kuma-hf-chaincode-dev start-dev',
        'build': 'kuma-hf-chaincode-dev build',
        'test': 'jest test/'
    },

    DEFAULT_CHANNEL: 'defaultchannel',
    DEFAULT_CHAINCODE_DESTINATION_PATH: path.resolve(__dirname, '../../dev-network/generated/devmode/chaincode'),
    DEFAULT_DOCKER_FILE: path.resolve(__dirname, '../../dev-network/generated/devmode/docker-compose-simple.yaml'),
    SCRIPTS_PATH: path.resolve(__dirname, '../scripts'),
    DOCKER_SETUP_FINISHED_REGEX: /^.*?orderer.*?\[orderer\/common\/deliver\]\s+deliverBlocks\s+->\s+DEBU\s[0-9].*?\[channel:\s+.*?\]\s+Received\s+seekInfo\s+\(.*?\)\s+start:.*?$/gmi,
    DEPLOY_FINISHED_REGEX: /^.*?Successfully\s+established\s+communication\s+with\s+peer\s+node\.\s+State\s+transferred\s+to\s+"ready".*?$/gmi
};
