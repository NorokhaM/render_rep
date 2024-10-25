FROM eclipse-temurin:21-jdk-alpine
VOLUME /tmp
COPY target/*.jar spring_demo-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/spring_demo-0.0.1-SNAPSHOT.jar"]