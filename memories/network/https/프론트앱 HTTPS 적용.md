## Environment

- GCP, Intel Broadwell
- debian-10-buster-v20220310

기본적으로 root 권한(`sudo su`)으로 작업했습니다.

## 1. nginx & certbot 설치

- `apt-get update`
- `apt-get install nginx`
- `apt-get install software-properties-common`
- `add-apt-repository ppa:certbot/certbot`
- `apt-get update`

## 2. 파이썬 설치

아마 이 단계에선 파이썬이 설치가 되어있을 것으로 예상됩니다.

- `python --version`

파이썬이 설치가 안되어있다면 설치해줍니다.

- `apt-get install python`

버전 확인 후 만약 파이썬 2가 설치되어 있다면 위 명령어, 3이 설치되어 있다면 아래 명령어로 실행합니다.

- `apt-get install python-certbot-nginx`
- `apt-get install python-certbot3-nginx`

## 3. react 빌드하기

git을 설치하고, 코드를 받아옵니다. 이미 있다면 넘어갑니다.

- `apt-get install git`
- `git config --global user.name i4song`
- `git config --global user.email i4song@gmail.com`
- `git clone https://github.com/i4song/i4song-blog.git`

node.js를 설치합니다. 이미 있다면 넘어갑니다.

- `apt-get install -y build-essential`
- `apt-get install curl`
- `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash --`
- `apt-get install -y node.js`

npm을 설치합니다. 이미 있다면 넘어갑니다.

- `apt-get install npm`

yarn을 설치합니다. (npm으로 생성한 프로젝트라면 넘어갑니다.)

- `npm install -g yarn`

해당 프로젝트가 있는 폴더로 이동하고 빌드합니다.

- `cd i4song-blog`
- `yarn` or `npm install`
- `yarn run build` or `npm run build`

## 4. nginx 설정(for react)

도메인 이름으로 config 파일을 작성하고 심볼릭 링크를 생성합니다.

- `vi /etc/nginx/sites-available/i4song.com`

    ```jsx
    server {
     server_name i4song.com;
        
        location / {
          root /home/i4song/i4song-blog/build/; //리액트 프로젝트의 build 폴더 위치
          index index.html;
          try_files $uri $uri/ /index.html;
        }
    }
    ```

- `sudo ln -s /etc/nginx/sites-available/i4song.com /etc/nginx/sites-enabled/i4song.com`

## 4. certbot으로 인증서 발급

- `certbot --nginx -d i4song.com`
  - **1**을 입력한다면 http 연결을 https로 리다이렉트 하지 않습니다.
  - **2**를 입력한다면 https 연결을 https 로 리다이렉트 시킵니다.

## 5. 인증서 자동갱신 설정(crontab)

아래와 같이 설정하면 매월 인증서를 갱신하게 됩니다.

- `crontab -e`
- `1 1 1 * * certbot renew --renew-hook "sudo service nginx restart"`
