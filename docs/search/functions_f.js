var searchData=
[
  ['set_373',['set',['../CMakeLists_8txt.html#a87f2d603574a84a0e3edf1432322aaa2',1,'set(FIND_LIBRARY_USE_LIB64_PATHS true) endif() if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 11) endif() if(NOT CMAKE_BUILD_TYPE) if(NOT WIN32) set(CMAKE_BUILD_TYPE &quot;RelWithDebInfo&quot;) endif() endif() if(NOT DEFINED AWS_CRT_CPP_VERSION) set(AWS_CRT_CPP_VERSION &quot;v1.0.0-dev&quot;) execute_process(COMMAND git describe --tags RESULT_VARIABLE GIT_EXIT_CODE OUTPUT_VARIABLE GIT_TAG ERROR_QUIET OUTPUT_STRIP_TRAILING_WHITESPACE) if(NOT GIT_EXIT_CODE) set(AWS_CRT_CPP_VERSION $:&#160;CMakeLists.txt'],['../CMakeLists_8txt.html#a0165514105e215eb4675ab9e0cb6168b',1,'set(BUILD_TESTING OFF) add_subdirectory(crt/aws-c-common) if(UNIX AND NOT APPLE AND NOT BYO_CRYPTO) if(NOT USE_OPENSSL) set(DISABLE_PERL ON CACHE BOOL &quot;Disable Perl for AWS-LC.&quot;) set(DISABLE_GO ON CACHE BOOL &quot;Disable Go for AWS-LC.&quot;) set(OLD_CMAKE_C_FLAGS &quot;$:&#160;CMakeLists.txt'],['../CMakeLists_8txt.html#ac030182a6a8a0f8a2e0c33b2e6513872',1,'set(SEARCH_LIBCRYPTO OFF CACHE BOOL &quot;Let S2N use libcrypto from AWS-LC.&quot;) else() set(SEARCH_LIBCRYPTO ON CACHE BOOL &quot;Let S2N search libcrypto in the system.&quot;) endif() set(UNSAFE_TREAT_WARNINGS_AS_ERRORS OFF CACHE BOOL &quot;Disable warnings-as-errors when building S2N&quot;) add_subdirectory(crt/s2n) endif() add_subdirectory(crt/aws-c-io) add_subdirectory(crt/aws-c-cal) add_subdirectory(crt/aws-c-compression) add_subdirectory(crt/aws-c-http) add_subdirectory(crt/aws-c-auth) add_subdirectory(crt/aws-c-mqtt) add_subdirectory(crt/aws-checksums) add_subdirectory(crt/aws-c-event-stream) add_subdirectory(crt/aws-c-s3) set(BUILD_TESTING $:&#160;CMakeLists.txt']]],
  ['setstrategy_374',['SetStrategy',['../classAws_1_1Crt_1_1Http_1_1AdaptiveHttpProxyStrategy.html#a852bd301949015fb93558bfb100fceb6',1,'Aws::Crt::Http::AdaptiveHttpProxyStrategy']]],
  ['string_375',['string',['../CMakeLists_8txt.html#a7c60a77e7ed55e387d5cfde4d58df1e2',1,'CMakeLists.txt']]],
  ['subackcallbackdata_376',['SubAckCallbackData',['../structAws_1_1Crt_1_1Mqtt_1_1SubAckCallbackData.html#a87b37e52f2cc4d332ac1e8dfaddd41a6',1,'Aws::Crt::Mqtt::SubAckCallbackData']]]
];
