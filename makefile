DIR_SERV = /home/xian/APP/apache-tomcat-9.0.33/webapps/microproject
DIR_SERV_CLASS = $(DIR_SERV)/WEB-INF/classes
DIR_SERV_STATIC = $(DIR_SERV)/static
DIR_CLASS = target/classes/jar
DIR_STATIC = static

install:
	cp -r $(DIR_CLASS) $(DIR_SERV_CLASS)
	cp -r $(DIR_STATIC) $(DIR_SERV)
	cp web.xml $(DIR_SERV)/WEB-INF/

clean:
	rm -r $(DIR_SERV_CLASS)/jar/
	rm -r $(DIR_SERV_STATIC)