FROM node:16
COPY . /app
WORKDIR /app
EXPOSE 3000
# Install Native Playwright Browser Dependencies
RUN apt-get update
RUN apt-get install -y libnss3
RUN apt-get install -y libnspr4 
RUN apt-get install -y libatk1.0-0
RUN apt-get install -y libatk-bridge2.0-0
RUN apt-get install -y libcups2
RUN apt-get install -y libdrm2
RUN apt-get install -y libdbus-1-3
RUN apt-get install -y libxkbcommon0
RUN apt-get install -y libxcomposite1
RUN apt-get install -y libxdamage1
RUN apt-get install -y libxfixes3
RUN apt-get install -y libxrandr2
RUN apt-get install -y libgbm1
RUN apt-get install -y libasound2
RUN apt-get install -y libatspi2.0-0
RUN apt-get install -y libwayland-client0
RUN apt-get install -y libgtk-3-0
RUN apt-get install -y libdbus-glib-1-2
RUN apt-get install -y libx11-xcb1
RUN apt-get install -y libxcursor1
RUN apt-get install -y ffmpeg
RUN npm ci
RUN npm run build
#RUN useradd pwuser
#USER pwuser
CMD ["node", "dist/main"]
