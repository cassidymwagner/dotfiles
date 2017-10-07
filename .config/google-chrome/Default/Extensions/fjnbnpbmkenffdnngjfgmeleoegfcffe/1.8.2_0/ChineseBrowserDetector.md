#Chines browser detector note

##Spark
- can not be detected by useragent
- has special method in the external: GetSparkInfo
- external note:
	- GetNextReqID
	- GetSparkInfo
	- GetVersion

##Baidu
- can be detected by useragent
- external note:
	- AddSearchProvider
	- GetNextReqID
	- GetOriginalUrl
	- GetVersion
	- IsSearchProviderInstalled
	- ReportResult
	- StartRequest

##2345
- can be detected by useragent

##360SE
- can not be detected by useragent
- external note
 - AddSearchProvider
 - IsSearchProviderInstalled

##360EE
- can not be detected by useragent
- external note:
	- AddSearchProvider
	- AppCmd
	- GetMID
	- GetRunPath
	- GetSID
	- GetVersion
	- IsSearchProviderInstalled