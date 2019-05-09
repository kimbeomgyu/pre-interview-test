# [HOUSTEP] Pre-Interview Test

주어진 소스를 initial commit으로 해서 github(혹은 gitlab 등)에 올립니다. 그리고 나서 아래 문제를 지시에 따라 풀고 commit 해주시면 됩니다. 제출은 링크를 이름과 함께 이메일로 전송해 주세요.

# JS

아래 3 문제를 지시에 따라 수정해 주세요. 의미 설명은 파일 상단의 주석에 하고 변경 사항에 대한 상세한 설명은 해당 코드 위에 주석으로 설명하면 됩니다.

1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.

   ```js
   let incomes = [1000, 2000, 3000, 4000];

   let vats = [];
   for (i = 0; i < incomes.length; i++) {
     // 부가세 계산
     vats[i] = incomes[i] / 11;
   }

   let price = 0;
   for (let i in incomes) {
     price += incomes[i];
   }
   ```

2. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고 그 문제가 발생하지 않도록 코드를 수정하세요.

   ```js
   const Moment = require('moment');
   const convertParam = params => {
     for (const key in params) {
       if (params[key] == undefined) {
         delete params[key];
       }
       if (params[key] instanceof moment) {
         params[key] = params[key].toISOString();
       }
     }
   };

   const p = { a: 'test', b: moment('2019-05-07'), c: undefined };
   convertParam(p);
   ```

3. 아래 코드를 `class`를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.

   ```js
   const inherits = require('util').inherits;

   function Queue(contents = []) {
     this.queue = [...contents];
   }
   Queue.prototype.pop = function() {
     const value = this.queue[0];
     this.queue.splice(0, 1);
     return value;
   };

   function PeekableQueue(contents) {
     Queue.apply(this, contents);
   }
   inherits(PeekableQueue, Queue);
   PeekableQueue.prototype.peek = function() {
     return this.queue[0];
   };
   ```

# ReactJS

정답은 없습니다. 아래 소스를 받아서 코드를 보고 편안하게 여러분의 동료와 코드 리뷰 한다는 생각으로 문제점이 생각나면 수정해 주시고 주석으로 "이러이러한 문제가 발생할 수 있을 것 같아 이렇게 고쳤습니다."라고 남겨주세요.

[frontend-interview.zip](frontend-interview-3c4224e7-4029-42f5-b290-37394fb8f74b.zip)
