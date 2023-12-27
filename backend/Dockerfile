FROM openjdk:17
WORKDIR /my-project
CMD ["./gradlew", "clean", "bootJar"]
COPY build/libs/*.jar app.jar
EXPOSE 8080
RUN ls
ENTRYPOINT  ["java", "-jar", "app.jar"]