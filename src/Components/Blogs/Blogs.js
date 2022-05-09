import React from 'react'

function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  1. Difference between authorization and authentication
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  Authentication হলো কেউকে যাচাই করার প্রক্রিয়া, যেখানে authorization হল ব্যবহারকারী কোন নির্দিষ্ট অ্যাপ্লিকেশন ফাইল এবং ডাটা তে  এক্সেস রয়েছে  কিনা তা যাচাই করার প্রক্রিয়া। একটি এয়ারলাইন্সে যেমন প্রথমে নিশ্চিত করা হয় এই লোকটি বোর্ডে আসতে পারবে কিনা এবং তার পরিচয় নিশ্চিত করা হয়। দ্বিতীয় ধাপের যাত্রীর এক্সেস আছে কিনা এমন কোনো বিশেষ পরিসেবার  যে সে ফার্স্ট ক্লাস ফ্লাইং হোক বা বিপি লঞ্চে যাওয়ার অনুমতি আছে কি না। তেমনি অথেন্টিকেশন হল কোন লোক ওয়েবসাইটে ঢুকতে পাড়ার অনুমতি দেয়া যাবে কিনা তা চেক করে আর authorization  হল সেই লোকের জন্য কোন এপ্লিকেশন ফাইল এবং ডাটা এক্সেস দেওয়া যাবে কিনা তা চেক করে।
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  2. Why are you using firebase? What other options do you have to implement authentication?      </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  Firebase-এর সেরা বৈশিষ্ট্যগুলির মধ্যে একটি হল অ্যানালিটিক্স ড্যাশবোর্ড যা এটি দিয়ে সজ্জিত। এটি বিনামূল্যে এবং 500টি ইভেন্টের প্রকার রিপোর্ট করার ক্ষমতা রয়েছে, প্রতিটিতে 25টি পর্যন্ত বৈশিষ্ট্য রয়েছে৷ এটির মাধ্যমে অনেক সহজেই মার্কেটিং করা যায় এবং আমি যে নির্দিষ্ট ব্যবহারকারীদের কাছে পৌঁছে দিতে চাচ্ছি তাদের সহজেই পাওয়া যায়। এবং অ্যাপ ডেভেলপমেন্ট এর সবচেয়ে গুরুত্বপূর্ণ দিকগুলো একটি হলো সময়ের সাথে সাথে ব্যবহারকারীদের বাড়াতে এবং তাদের সাথে যুক্ত হতে সক্ষম হওয়া সার্ভিসের মাধ্যমে অনেক সহজেই করা যায়। এবং আমার পছন্দের সবচেয়ে প্রিয় একটি হলো যে সিস্টেম দিয়েই অ্যাপ ডেভেলপ করতে চাই না কেন সব সবকিছুর জন্যই সমাধান রয়েছে Firebase alternative Back4App, AWS Amplify , Kuzzle. Couchbase NativeScript. RxDB.Flutter.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  3. What other services does firebase provide other than authentication      </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  Cloud Messaging: Deliver and receive messages in a more reliable way across platforms Authentication: Hosting: fast hosting service, Remote Configuration: Customize your app on the go Test Lab: Test in the lab instead of on your users Crash Reporting: Realtime Database: Store and sync app data in realtime worldwide Storage: File storing easy Integration with Other Services Audience Segmentation Unlimited Reporting Dynamic Links.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blogs